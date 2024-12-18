import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const MobileView = ({
  isOpen,
  navItems,
  setIsOpen,
}: {
  isOpen: boolean;
  navItems: { name: string; href: string }[];
  setIsOpen: (arg0: boolean) => void;
}) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? 0 : "100%" }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed flex-col justify-center items-center md:hidden top-0 right-0 h-screen w-full bg-[#FAFFF7] z-40"
        >
          <Image
            src="/new_images/logo.webp"
            width={150}
            height={150}
            alt="logo"
            className="mx-auto mt-12"
          />
          <ul className="flex flex-col space-y-4 items-center justify-center w-full pt-20">
            {navItems.map((item, i) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="my-2"
              >
                <Link
                  href={item.href}
                  className="text-[rgb(55,65,81)] font-sans hover:text-[#d1f349]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileView;
