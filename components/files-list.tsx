import DocumentValidationIcon from "./icons/document-validation-stroke-rounded";
import Csv01Icon from "./icons/csv-01-stroke-rounded";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface File {
  name: string;
  size: string;
  date: string;
  type: string;
}

export default function FilesList({ files }: { files: File[] }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {files.map((file, index) => (
        <Card key={index}>
          {" "}
          {/* Adjust the height as needed */}
          <CardHeader>
            <div className="flex flex-row items-center">
              {file.type === "csv" ? (
                <Csv01Icon className={`h-10 w-10 mr-2 text-green-500`} />
              ) : (
                <DocumentValidationIcon
                  className={`h-10 w-10 mr-2 ${
                    file.type === "pdf"
                      ? "text-red-500"
                      : file.type === "doc" ||
                        file.type === "text" ||
                        file.type === "markdown"
                      ? "text-blue-500"
                      : "dark:text-white"
                  }`}
                />
              )}
              <div>
                <CardTitle>{file.name}</CardTitle>
                <span className="text-sm text-neutral-500">{file.size}</span>
              </div>
            </div>
            <CardDescription className="">
              <span className="text-sm text-neutral-500">
                Created on {file.date}
              </span>
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
