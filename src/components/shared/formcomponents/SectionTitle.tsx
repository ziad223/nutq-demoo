"use client";

import React from "react";
import Image from "next/image";
import title from "@/public/title.svg";

interface SectionTitleProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const SectionTitle = ({
  title: titleText,
  description,
  imageUrl,
}: SectionTitleProps) => {
  return (
    <div className="text-center mb-6 md:mb-12">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center lg:justify-start gap-2 lg:gap-4 mb-3">
          <div className="w-[42px] lg:w-16 mb-2 lg:mb-0">
            <Image
              src={imageUrl || title}
              alt="ornament"
              width={42}
              height={9}
              className="object-cover w-full"
            />
          </div>
          {/* Title */}
          <h2 className="text-[#CAB16C] text-2xl mb-2">{titleText}</h2>
        </div>

        {/* description */}
        <p className="text-white text-base md:text-xl">{description}</p>
      </div>
    </div>
  );
};

export default SectionTitle;

// "use client";

// import React from "react";
// import Image from "next/image";
// import title from "@/public/title.svg";
// import { useTranslations } from "next-intl";

// interface SectionTitleProps {
//   title: string;
//   description: string;
//   imageUrl?: string;
// }

// const SectionTitle = ({
//   title: titleText,
//   description,
//   imageUrl,
// }: SectionTitleProps) => {
//   const t = useTranslations("SectionTitle");

//   return (
//     <div className="text-center mb-6 md:mb-12">
//       {/* <div>remove meeeeeeeeeeeeeeeeeeeeeeee</div>
//       <div>{t("title")}</div> */}
//       <div className="flex flex-col items-center">
//         <div className="flex flex-col items-center lg:justify-start gap-2 lg:gap-4 mb-3">
//           <div className="w-[42px] lg:w-16 mb-2 lg:mb-0">
//             <Image
//               src={imageUrl || title}
//               alt="ornament"
//               width={42}
//               height={9}
//               className="object-cover w-full"
//             />
//           </div>
//           {/* Title */}
//           <h2 className="text-[#CAB16C] text-2xl mb-2">
//             {titleText ? t(titleText) : "no titletext"}
//           </h2>
//         </div>

//         {/* description */}
//         <p className="text-white text-base md:text-xl">
//           {description ? t(description) : "no description"}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SectionTitle;
