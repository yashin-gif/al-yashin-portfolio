import { ArrowUpRight } from "lucide-react";

const ContactCard = ({ icon: Icon, label, value, href }) => {
    const Wrapper = href ? "a" : "div";

    const linkProps = href
        ? {
              href,
              target: href.startsWith("http") ? "_blank" : undefined,
              rel: "noopener noreferrer",
          }
        : {};

    return (
        <Wrapper
            {...linkProps}
            className="group relative block rounded-2xl border border-slate-700/70 bg-slate-800/50 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-teal-400/30"
        >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/10 text-teal-300">
                <Icon size={19} />
            </div>

            <h3 className="mt-4 text-base font-bold text-white">{label}</h3>
            <p className="mt-1 break-words text-sm text-slate-400">{value}</p>

            {href && (
                <ArrowUpRight
                    size={16}
                    className="absolute right-5 top-5 text-slate-600 transition-colors duration-200 group-hover:text-teal-300"
                />
            )}
        </Wrapper>
    );
};

export default ContactCard;