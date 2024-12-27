import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

export function BreadcrumbWithCustomSeparator({
  links,
}: {
  links: {
    label: string;
    to: string;
    active?: boolean;
  }[];
}) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {links.map((link, i) => {
          if (i !== links.length - 1) {
            return (
              <div
                key={link.label}
                className="flex items-center justify-center gap-2">
                <BreadcrumbItem>
                  <>
                    <Link to={link.to}>{link.label}</Link>
                  </>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </div>
            );
          }
          return (
            <div key={link.label}>
              <BreadcrumbItem
                className="text-black font-semibold"
                key={link.label}>
                <>
                  <Link to={link.to}>{link.label}</Link>
                </>
              </BreadcrumbItem>
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
