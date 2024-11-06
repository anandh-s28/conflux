import DocumentValidationIcon from "./icons/document-validation-stroke-rounded";
import { Card, CardHeader, CardTitle } from "./ui/card";

interface File {
  name: string;
  size: string;
  date: string;
  type: string;
}

export default function FilesList({ files }: { files: File[] }) {
  return (
    <div className="flex flex-col space-y-4">
      {files.map((file, index) => (
        <Card key={index}>
          <CardHeader>
            <DocumentValidationIcon
              className={`h-5 w-5 mr-2 ${
                file.type === "pdf"
                  ? "text-red-500"
                  : file.type === "word" ||
                    file.type === "text" ||
                    file.type === "markdown"
                  ? "text-blue-500"
                  : file.type === "csv"
                  ? "text-green-500"
                  : "dark:text-white"
              }`}
            />
            <CardTitle>{file.name}</CardTitle>
          </CardHeader>
          <div>
            <p>Size: {file.size}</p>
            <p>Date: {file.date}</p>
            <p>Type: {file.type}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
