import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default function JobItem (props: { position: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; company: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; duration: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; duties: any[]; }) {
  return (
     <div className="relative pl-6 border-l-2 border-frog-green">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-frog-green"></div>
                <h3 className="text-xl font-cabinet font-bold">{props.position}</h3>
                <p className="text-frog-green font-geist font-medium">{props.company}</p>
                <p className="text-sm font-geist opacity-70 mb-3">{props.duration}</p>
                <ul className="list-disc list-inside space-y-2 font-geist">
                  {props.duties.map((duty, index) => (<li key={index}>{duty}</li>))}
                </ul>
              </div>
        )
}