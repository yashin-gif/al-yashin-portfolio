import { Send } from "lucide-react";

const ContactCTA = () => {
    return (
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-teal-400/15 bg-teal-400/[0.04] px-6 py-5 text-center sm:flex-row sm:text-left">
            <p className="text-sm leading-6 text-slate-300">
                I&apos;m always interested in building something useful.
            </p>

            <a
                href="mailto:fasalyashin@gmail.com?subject=Hello%20Yashin"
                className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-teal-400 px-5 py-2.5 text-sm font-bold text-teal-950 transition-all duration-200 hover:-translate-y-1 hover:bg-teal-300"
            >
                Send Message
                <Send size={16} />
            </a>
        </div>
    );
};

export default ContactCTA;