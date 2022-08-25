import clsx from "clsx";
import NextLink from "next/link";
import { useRouter } from "next/router";
export interface CustomLinkProps {
  children: React.ReactNode;
  href: string;
  display: "link" | "btn";
  style?: "indigo" | "blue";
  className?: string;
}
const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  children,
  style,
  display,
  className,
}) => {
  const { pathname } = useRouter();
  return (
    <NextLink href={href} passHref>
      <a
        className={clsx({
          ["font-semibold"]: true,
          ["hover:underline hover:underline-offset-4 duration-200"]:
            display === "link",
          ["underline underline-offset-4"]:
            display === "link" && href === pathname,
          ["text-gray-200 px-3 py-1 rounded-sm shadow-md shadow-gray-700/30 duration-200"]:
            display === "btn",
          ["bg-blue-700 hover:bg-blue-900"]:
            display === "btn" && style === "blue",
          ["bg-indigo-700 hover:bg-indigo-900"]:
            display === "btn" && style === "indigo",
          [className ?? ""]: className ?? false,
        })}
      >
        {children}
      </a>
    </NextLink>
  );
};

export default CustomLink;
