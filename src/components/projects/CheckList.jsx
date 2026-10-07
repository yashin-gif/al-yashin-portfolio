import { Check } from "lucide-react";

const CheckList = ({ items }) => {
    return (
        <ul className="space-y-3">
            {items.map((item) => (
                <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-slate-300"
                >
                    <Check size={16} className="mt-1 shrink-0 text-teal-300" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
};

export default CheckList;