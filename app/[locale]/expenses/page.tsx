'use client'
import Table from '@/components/shared/reusableComponents/Table';
import { useTranslations , useLocale } from 'next-intl';
import { useState } from 'react';
import { FaAngleRight, FaPlus, FaPrint, FaPenToSquare, FaTrashCan } from 'react-icons/fa6';

interface Expense {
    id: number;
    name: string;
    created_at: string;
    category: {
        id: number;
        name: string;
    };
    amount: number;
    notes: string;
}

interface Category {
    id: number;
    name: string;
}

const ExpensesPage = () => {
    const t = useTranslations('accounting');
    const locale = useLocale()
    const [expenses, setExpenses] = useState<Expense[]>([
        {
            id: 1,
            name: "Office Supplies",
            created_at: "2023-05-15",
            category: { id: 1, name: "Supplies" },
            amount: 150.75,
            notes: "Paper, pens, and notebooks"
        },
        {
            id: 2,
            name: "Internet Bill",
            created_at: "2023-05-10",
            category: { id: 2, name: "Utilities" },
            amount: 89.99,
            notes: "Monthly internet service"
        }
    ]);

    const [categories, setCategories] = useState<Category[]>([
        { id: 1, name: "Supplies" },
        { id: 2, name: "Utilities" },
        { id: 3, name: "Salaries" },
        { id: 4, name: "Marketing" },
        { id: 5, name: "Travel" }
    ]);

    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedExpense, setSelectedExpense] = useState<Expense | null>(null);

    // Form state
    const [formData, setFormData] = useState<Omit<Expense, 'id' | 'created_at'> & { id?: number }>({
        name: '',
        category: { id: 0, name: '' },
        amount: 0,
        notes: ''
    });

    const handlePrint = () => {
        window.print();
    };

    const handleEdit = (expense: Expense) => {
        setSelectedExpense(expense);
        setFormData({
            name: expense.name,
            category: expense.category,
            amount: expense.amount,
            notes: expense.notes,
            id: expense.id
        });
        setShowAddModal(true);
    };

    const handleDelete = (expense: Expense) => {
        setSelectedExpense(expense);
        setShowDeleteModal(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (name === 'category') {
            const selectedCategory = categories.find(cat => cat.id === Number(value));
            if (selectedCategory) {
                setFormData(prev => ({
                    ...prev,
                    category: { id: selectedCategory.id, name: selectedCategory.name }
                }));
            }
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: name === 'amount' ? Number(value) : value
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.id) {
            // Update existing expense
            setExpenses(prev => prev.map(exp =>
                exp.id === formData.id ? {
                    ...exp,
                    ...formData,
                    created_at: new Date().toISOString()
                } : exp
            ));
        } else {
            // Add new expense
            const newExpense: Expense = {
                id: Math.max(...expenses.map(e => e.id), 0) + 1,
                name: formData.name,
                category: formData.category,
                amount: formData.amount,
                notes: formData.notes,
                created_at: new Date().toISOString()
            };
            setExpenses(prev => [...prev, newExpense]);
        }

        setShowAddModal(false);
        resetForm();
    };

    const resetForm = () => {
        setFormData({
            name: '',
            category: { id: 0, name: '' },
            amount: 0,
            notes: ''
        });
    };

    const columns = [
        { label: "#", key: "id" },
        { label: "Name", key: "name" },
        { label: "Date", key: "date" },
        { label: "Category", key: "category" },
        { label: "Amount", key: "amount" },
        { label: "Notes", key: "notes" },
        { label: "Actions", key: "actions" }
    ];

    const tableData = expenses.map(expense => ({
        id: expense.id,
        name: expense.name,
        date: new Date(expense.created_at).toISOString().split('T')[0],
        category: expense.category.name,
        amount: expense.amount.toFixed(2),
        notes: expense.notes,
        actions: (
            <div className="flex items-center justify-center gap-1">
                <button
                    onClick={() => handleEdit(expense)}
                    className="btn btn-sm btn-info text-white p-1.5 rounded"
                >
                    <FaPenToSquare />
                </button>
                <button
                    onClick={() => handleDelete(expense)}
                    className="btn btn-sm btn-danger p-1.5 rounded"
                >
                    <FaTrashCan />
                </button>
            </div>
        )
    }));

    return (
        <section className="users py-4">
            {/* Add/Edit Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h3 className="text-lg font-semibold mb-4">
                            {formData.id ? "Edit Expense" : "Add Expense"}
                        </h3>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                                    Category
                                </label>
                                <select
                                    id="category"
                                    name="category"
                                    value={formData.category.id}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                >
                                    <option value="">Select a category</option>
                                    {categories.map(category => (
                                        <option key={category.id} value={category.id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                                    Amount
                                </label>
                                <input
                                    type="number"
                                    id="amount"
                                    name="amount"
                                    value={formData.amount}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    min="0"
                                    step="0.01"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="notes">
                                    Notes
                                </label>
                                <textarea
                                    id="notes"
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    rows={3}
                                />
                            </div>

                            <div className="flex justify-end gap-2 mt-4">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowAddModal(false);
                                        resetForm();
                                    }}
                                    className="px-4 py-2 bg-gray-300 rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-main-color text-white rounded"
                                >
                                    {formData.id ? "Update" : "Save"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Delete Modal */}
            {showDeleteModal && selectedExpense && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h3 className="text-lg font-semibold mb-4">Delete Expense</h3>
                        <p>Are you sure you want to delete "{selectedExpense.name}"?</p>
                        <div className="flex justify-end gap-2 mt-4">
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                className="px-4 py-2 bg-gray-300 rounded"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    setExpenses(prev => prev.filter(exp => exp.id !== selectedExpense.id));
                                    setShowDeleteModal(false);
                                }}
                                className="px-4 py-2 bg-red-600 text-white rounded"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="container mx-auto px-4">
                <div className="flex mb-3">
                    <a
                        href={`/${locale}/accounting`}
                        className="btn bg-main-color text-white px-4 py-2 rounded"
                    >
                        <FaAngleRight />
                    </a>
                </div>

                <h4 className="main-heading text-xl font-bold text-gray-800 mb-4">Expenses</h4>

                <div className="section-content bg-white rounded-lg shadow p-6">
                    <div className="flex flex-wrap items-center gap-2 mt-3 justify-between mb-4">
                        <a
                            href="/categories"
                            className="btn btn-sm btn-primary px-4 py-2 bg-blue-600 text-white rounded text-sm"
                        >
                            Categories
                        </a>

                        <div className="flex flex-wrap items-center gap-2 justify-end">
                            <button
                                onClick={() => {
                                    setSelectedExpense(null);
                                    resetForm();
                                    setShowAddModal(true);
                                }}
                                className="btn-main-sm bg-main-color text-white px-4 py-2 rounded text-sm flex items-center"
                            >
                                Add expense
                                <FaPlus className="ml-2" />
                            </button>
                            <button
                                onClick={handlePrint}
                                className="print-btn btn btn-sm btn-warning px-4 py-2 bg-yellow-500 text-white rounded text-sm"
                            >
                                <FaPrint />
                            </button>
                        </div>
                    </div>

                    <Table columns={columns} data={tableData} />
                </div>
            </div>

            <style jsx global>{`
                @media print {
                    .not-print {
                        display: none !important;
                    }
                }
                
                .main-heading {
                    color: #333;
                    font-weight: 600;
                }
                
                .bg-main-color {
                    background-color: #4e73df;
                }
                
                .btn-main-sm {
                    background-color: #4e73df;
                    color: white;
                    padding: 0.375rem 0.75rem;
                    font-size: 0.875rem;
                    border-radius: 0.25rem;
                }
                
                .btn-main-sm:hover {
                    background-color: #2e59d9;
                }
                
                .btn-primary {
                    background-color: #4e73df;
                    color: white;
                }
                
                .btn-info {
                    background-color: #36b9cc;
                    color: white;
                }
                
                .btn-danger {
                    background-color: #e74a3b;
                    color: white;
                }
                
                .btn-warning {
                    background-color: #f6c23e;
                    color: white;
                }
                
                .section-content {
                    border-radius: 0.5rem;
                    box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15);
                }
            `}</style>
        </section>
    );
};

export default ExpensesPage;