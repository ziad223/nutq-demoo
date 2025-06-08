'use client'
import DateInput from '@/components/shared/reusableComponents/DateInput';
import FormSection from '@/components/shared/reusableComponents/FormSection';
import RadioGroup from '@/components/shared/reusableComponents/GenderRadio';
import TextInput from '@/components/shared/reusableComponents/TextInput';
import React from 'react';


const StudyCaseForm = () => {
    return (
        <div dir="rtl" className="max-w-6xl mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-6 text-black">أستمارة دراسية الحالة</h1>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <FormSection title="البيانات الأولية">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                        <TextInput label="أسم الطفل" name="childName" defaultValue="محمد لاشين" disabled />
                        <DateInput label="تاريخ الميلاد" name="birthDate" />
                        <TextInput label="العمر الزمني" name="age" />
                        <RadioGroup
                            label="مدى تقبل الأسرة للاضطراب واستعدادها للمشاركة في التأهيل"
                            name="gendar"
                            options={[
                                { label: "ذكر", value: "male" },
                                { label: "أنثي", value: "female" }
                            ]}
                        />

                        <TextInput label="الجنسية" name="nationality" />
                        <TextInput label="المدينة" name="city" />
                        <TextInput label="الحي" name="district" />
                        <TextInput label="الشارع" name="street" />

                        <TextInput label="اسم ولي الأمر" name="guardianName" />
                        <TextInput label="صلته بالطفل" name="guardianRelation" />
                        <TextInput label="رقم الموبايل" name="mobile" />
                        <TextInput label="رقم المنزل" name="phone" />

                        <TextInput label="مستوى تعليم الأب" name="fatherEducation" />
                        <TextInput label="عمل الأب" name="fatherJob" />
                        <TextInput label="مكان العمل" name="fatherWorkplace" />

                        <TextInput label="مستوى تعليم الأم" name="motherEducation" />
                        <TextInput label="عمل الأم" name="motherJob" />
                        <TextInput label="مكان العمل" name="motherWorkplace" />

                        <TextInput label="عدد افراد الأسرة" name="familyMembers" />
                        <TextInput label="ترتيب الطفل بين أخوانه" name="childOrder" />

                        <RadioGroup
                            label="درجة القرابة بين الوالدين"
                            name="parentsRelation"
                            options={[
                                { label: "درجة اولى", value: "first" },
                                { label: "درجة ثانية", value: "second" }
                            ]}
                        />

                        <RadioGroup
                            label="مع من يقيم الطفل"
                            name="residence"
                            options={[
                                { label: "الوالدين", value: "parents" },
                                { label: "الأب", value: "father" },
                                { label: "شخص اخر", value: "other" }
                            ]}
                        />

                        <TextInput label="المسؤول عن رعاية الطفل في المنزل" name="caretaker" />

                        <div className="md:col-span-2">
                            <RadioGroup
                                label="مدى التكيف الإجتماعي للطفل في الأسرة"
                                name="socialAdaptation"
                                options={[
                                    { label: "متكيف", value: "adapted" },
                                    { label: "غير متكيف", value: "notAdapted" }
                                ]}
                            />
                        </div>

                        <div className="md:col-span-2">
                            <RadioGroup
                                label="مدى تقبل الأسرة للاضطراب واستعدادها للمشاركة في التأهيل"
                                name="familyReadiness"
                                options={[
                                    { label: "مستعد", value: "ready" },
                                    { label: "غير مستعد", value: "notReady" }
                                ]}
                            />
                        </div>
                    </div>
                </FormSection>

                <FormSection title="التاريخ الصحي للاسرة">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <RadioGroup
                            label="هل توجد امراض وراثية في الاسرة"
                            name="geneticDiseases"
                            options={[
                                { label: "لا", value: "no" },
                                { label: "نعم", value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel="تذكر"
                        />
                    </div>
                </FormSection>

               
                <FormSection title="التاريخ الوراثي والمرضي للعائلة">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <RadioGroup
                            label="هل هناك صلة قرابة بين الام والاب"
                            name="parentsConsanguinity"
                            options={[
                                { label: "لا", value: "no" },
                                { label: "نعم", value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel="تذكر"
                        />

                        <RadioGroup
                            label="هل يوجد اي حالة اشتباة او اعاقات اخرى"
                            name="otherDisabilities"
                            options={[
                                { label: "لا", value: "no" },
                                { label: "نعم", value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel="تذكر"
                        />

                        <RadioGroup
                            label="هل اجرى الاب و الام الفحوصات الجينية"
                            name="geneticTests"
                            options={[
                                { label: "لا", value: "no" },
                                { label: "نعم", value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel="تذكر"
                        />

                        <RadioGroup
                            label="هل يعتقد الاطباء الاضطراب ناتج عن عوامل وراثية"
                            name="geneticCause"
                            options={[
                                { label: "لا", value: "no" },
                                { label: "نعم", value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel="تذكر"
                        />
                    </div>
                </FormSection>

                <FormSection title="تاريخ الحمل والولادة">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <RadioGroup
                            label="عمر الام عند الولادة"
                            name="motherAgeAtBirth"
                            options={[
                                { label: "دون سن 20", value: "under20" },
                                { label: "30-20", value: "20to30" },
                                { label: "فوق 30", value: "over30" }
                            ]}
                        />

                        <RadioGroup
                            label="طول فترة الحمل"
                            name="pregnancyDuration"
                            options={[
                                { label: "9 شهور", value: "9months" },
                                { label: "من 9 شهور", value: "lessThan9" },
                                { label: "اكثر من 9 شهور", value: "moreThan9" }
                            ]}
                        />

                        <RadioGroup
                            label="هل عانت الام من اي امراض قبل الحمل"
                            name="diseasesBeforePregnancy"
                            options={[
                                { label: "لا", value: "no" },
                                { label: "نعم", value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel="تذكر"
                        />

                        <RadioGroup
                            label="هل اصيبت الام من اي امراض اثناء الحمل"
                            name="diseasesDuringPregnancy"
                            options={[
                                { label: "لا", value: "no" },
                                { label: "نعم", value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel="تذكر"
                        />

                        <RadioGroup
                            label="هل عانت الام من التعب والارهاق الحاد اثناء فترة الحمل"
                            name="fatigueDuringPregnancy"
                            options={[
                                { label: "لا", value: "no" },
                                { label: "نعم", value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel="السبب"
                        />

                        <RadioGroup
                            label="هل تعرضت الام لحوادث تسمم اثناء فترة الحمل"
                            name="poisoningDuringPregnancy"
                            options={[
                                { label: "لا", value: "no" },
                                { label: "نعم", value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel="تذكر"
                        />

                        <RadioGroup
                            label="هل تعرضت الام لحوادث او اشعة اثناء فترة الحمل"
                            name="accidentsDuringPregnancy"
                            options={[
                                { label: "لا", value: "no" },
                                { label: "نعم", value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel="تذكر"
                        />

                        <RadioGroup
                            label="هل تعرضت الام للانفعالات اثناء فترة الحمل"
                            name="stressDuringPregnancy"
                            options={[
                                { label: "لا", value: "no" },
                                { label: "نعم", value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel="تذكر"
                        />

                        <RadioGroup
                            label="هل تناولت الام الفيتامينات اللازمة (الحديد / الفوليك اسيد) اثناء فترة الحمل"
                            name="vitaminsDuringPregnancy"
                            options={[
                                { label: "لا", value: "no" },
                                { label: "نعم", value: "yes" }
                            ]}
                        />
                    </div>
                </FormSection>
                <FormSection title="التاريخ المرضي والصحي للطفل">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <TextInput label="متى اكتشفت الاسرة الاضطراب" name="discoveryTime" />

                        <RadioGroup
                            label="هل اصيب الطفل باي امراض حادة أو حوادث اثرت على تطوره ونموه"
                            name="seriousIllness"
                            options={[
                                { label: "لا", value: "no" },
                                { label: "نعم", value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel="تذكر"
                        />

                        <RadioGroup
                            label="هل يعاني الطفل من مشكلات سمعية"
                            name="hearingProblems"
                            options={[
                                { label: "لا", value: "no" },
                                { label: "نعم", value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel="تذكر"
                        />

                        <RadioGroup
                            label="هل يعاني الطفل من مشكلات بصرية"
                            name="visionProblems"
                            options={[
                                { label: "لا", value: "no" },
                                { label: "نعم", value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel="تذكر"
                        />

                        <RadioGroup
                            label="هل يعاني الطفل من مشكلات خلقية"
                            name="congenitalProblems"
                            options={[
                                { label: "لا", value: "no" },
                                { label: "نعم", value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel="تذكر"
                        />

                        <RadioGroup
                            label="هل يعاني الطفل من مشكلات في تناول الطعام والشراب"
                            name="eatingProblems"
                            options={[
                                { label: "لا", value: "no" },
                                { label: "نعم", value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel="تذكر"
                        />

                        <RadioGroup
                            label="هل يعاني الطفل من الحساسية لادوية او اطعمة معينة"
                            name="allergies"
                            options={[
                                { label: "لا", value: "no" },
                                { label: "نعم", value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel="تذكر"
                        />

                        <RadioGroup
                            label="هل يعاني الطفل من نوبات تشنجات"
                            name="seizures"
                            options={[
                                { label: "لا", value: "no" },
                                { label: "نعم", value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel="تذكر"
                        />

                        <RadioGroup
                            label="هل اجرى الطفل عمليات جراحية"
                            name="surgeries"
                            options={[
                                { label: "لا", value: "no" },
                                { label: "نعم", value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel="تذكر"
                        />

                        <RadioGroup
                            label="هل مازال الطفل يستخدم الحفاظ؟"
                            name="usesDiapers"
                            options={[
                                { label: "لا", value: "no" },
                                { label: "نعم", value: "yes" }
                            ]}
                        />
                    </div>
                </FormSection>

                <FormSection title="تاريخ النمو التطورى للطفل">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <RadioGroup
                            label="مستوى النمو اللغوي الحالي؟"
                            name="languageDevelopment"
                            options={[
                                { label: "طبيعي", value: "normal" },
                                { label: "متأخر", value: "delayed" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel="تذكر"
                        />

                        <RadioGroup
                            label="مستوى النمو الحركي الحالي؟"
                            name="motorDevelopment"
                            options={[
                                { label: "طبيعي", value: "normal" },
                                { label: "متأخر", value: "delayed" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel="تذكر"
                        />

                        <RadioGroup
                            label="مستوى المهارات الوظيفية الاستقرارية الحالية؟"
                            name="functionalSkills"
                            options={[
                                { label: "طبيعي", value: "normal" },
                                { label: "متأخر", value: "delayed" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel="تذكر"
                        />

                        <RadioGroup
                            label="مستوى المهارات الإدراكية والمعرفية الحالية؟"
                            name="cognitiveSkills"
                            options={[
                                { label: "طبيعي", value: "normal" },
                                { label: "متأخر", value: "delayed" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel="تذكر"
                        />
                    </div>
                </FormSection>

                <FormSection title="قائمة المشكلات السلوكية">

                    <div className="flex flex-wrap gap-4 mt-5 mb-6">
                    <div className="w-full md:w-1/4 ">
                        <label className="text-sm font-bold mb-1 block text-black">أسم الطفل</label>
                        <input
                            type="text"
                            disabled
                            value="محمد لاشين"
                            className="form-input w-full border rounded px-3 py-2 bg-gray-200 text-black"
                        />
                    </div>

                    <div className="w-full md:w-1/2 text-black">
                        <label className="text-sm font-bold block mb-2">السن</label>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                <input
                                    type="number"
                                    className="w-14 h-8 border text-center rounded outline-none"
                                />
                                <label className="text-sm mx-2">سنه</label>
                            </div>
                            <div className="flex items-center gap-1">
                                <input
                                    type="number"
                                    className="w-14 h-8 border text-center rounded"
                                />
                                <label className="text-sm mx-2">شهر</label>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/4">
                        <label className="text-sm font-bold mb-1 block text-black">المستوى العقلي</label>
                        <input
                            type="text"
                            disabled
                            className="form-input w-full border rounded px-3 py-2 bg-gray-200\ text-black"
                        />
                    </div>
                </div>
                </FormSection>

                <div className="overflow-x-auto ">
                    <table className="table-auto text-black w-full border border-collapse text-center">
                        <thead>
                            <tr className="bg-green-600 text-white">
                                <th className="border p-2">م</th>
                                <th className="border p-2">السلوك</th>
                                <th className="border p-2">م</th>
                                <th className="border p-2">السلوك</th>
                                <th className="border p-2">م</th>
                                <th className="border p-2">السلوك</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ['1', 'حزين وغير سعيد', '21', 'يصيح ويصرخ', '41', 'يمص أصابعه'],
                                ['2', 'يخجل', '22', 'يرتمي على الأرض', '42', 'يأكل اظافره'],
                                ['3', 'ينقلب بسهولة', '23', 'يعدد ويهذي', '43', 'يأكل القاذورات'],
                                ['4', 'ينعزل عن الآخرين', '24', 'يضرب ويعتدي', '44', 'ينتف شعره'],
                                ['5', 'يبكي', '25', 'يشتم بالألفاظ القبيحة', '45', 'يلعب بأعضائه التناسلية'],
                                ['6', 'يخاف من الناس', '26', 'يحطم الأثاث', '46', 'يكشف عن عورته'],
                                ['7', 'يخاف من الحيوانات', '27', 'يضرب ويتوقف', '47', 'يهمل واجبه المدرسي'],
                                ['8', 'يخاف من أشياء أخرى', '28', 'يعض', '48', 'يهرب من المدرسة'],
                                ['9', 'يؤذي نفسه باللطم', '29', 'يسرق', '49', 'يتعلق بأبيه'],
                                ['10', 'يستيقظ مفزوعًا', '30', 'يجادل', '50', 'يتعلق بأمه'],
                                ['11', 'يسمع كوابيس ليلاً', '31', 'يصرخ عند الاستيقاظ', '51', 'لا يرتدي ملابسه علناً'],
                                ['12', 'يكثر من النوم', '32', 'يكثر من النوم', '52', 'لا يأكل جيداً'],
                                ['13', 'يستيقظ مبكرًا وينام', '33', 'يستيقظ مبكرًا وينام', '53', 'يأكل بشره'],
                                ['14', 'لا يظهر غضبه', '34', 'يبدي الغضب', '54', 'يبكي بسهولة'],
                                ['15', 'يدافع عن نفسه', '35', 'يدافع عن نفسه', '55', 'يرفض الانصياع للأوامر'],
                                ['16', 'يتحدث مع نفسه', '36', 'يتحدث مع نفسه'],
                                ['17', 'لا يستجيب للطفل', '37', 'يضحك على نفسه'],
                                ['18', 'لا يتوقف عن نشاطه', '38', 'لا يستجيب للطفل'],
                                ['19', 'يستمر في نشاطه', '39', 'يستمر في نشاطه'],
                                ['20', 'يكثر من الحركة', '40', 'يكثر من الحركة'],
                            ].map((row, index) => (
                                <tr key={index}>
                                    {row.map((cell, i) => (
                                        <td key={i} className="border p-1">
                                            {cell}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-6">
                    <label className="text-sm font-bold block mb-2 text-black">
                        أي ملاحظات أو مشكلات أخرى أضفها هنا:
                    </label>
                    <textarea
                        className="form-textarea w-full h-24 border rounded p-2 text-black"
                        placeholder="اكتب هنا..."
                    ></textarea>
                    <button className = 'bg-blue-500 text-white lg:w-[200px] rounded-[19px] cursor-pointer mt-5 h-[49px] px-10'>
                        حفظ التقرير
                    </button>
                </div>

            </div>
        </div>
    );
};

export default StudyCaseForm;