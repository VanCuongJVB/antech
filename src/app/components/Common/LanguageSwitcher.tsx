"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useI18n } from "@/utils/i18n";

interface Props {
  className?: string;
}

const LanguageSwitcher: React.FC<Props> = ({ className = "" }) => {
  const { lang } = useI18n();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", e.target.value);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <select
      value={lang}
      onChange={handleChange}
      className={`bg-transparent border border-darkmode rounded-lg px-2 py-1 text-darkmode cursor-pointer ${className}`}
    >
      <option value="en">EN</option>
      <option value="vi">VI</option>
      <option value="ja">JA</option>
    </select>
  );
};

export default LanguageSwitcher;
