import Link from "next/link";

type linkProps = {
  id: string | number;
  title: string;
  href: string;
};

const FooterSections = ({ ...props }: { head: string; links: linkProps[] }) => {
  return (
    <div className="flex flex-col">
      <h3 className="font-semibold exo-font text-lg mb-3">{props.head}</h3>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex">
          <div className="mr-6">
            <ul className="space-y-2">
              {props.links.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-black flex items-center gap-2"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSections;
