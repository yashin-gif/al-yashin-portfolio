const IconList = ({ items }) => {
    return (
        <ul className="space-y-3">
            {items.map(({ icon: Icon, label, text }) => (
                <li key={label} className="flex gap-3">
                    <Icon size={18} className="mt-0.5 shrink-0 text-teal-300" />
                    <p>
                        <span className="font-semibold text-white">
                            {label}:{" "}
                        </span>
                        {text}
                    </p>
                </li>
            ))}
        </ul>
    );
};

export default IconList;