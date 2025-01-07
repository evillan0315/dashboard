// Adjust the path as necessary
import * as React from "react";
import MarkdownEditor from "../../app/components/MarkdownEditor";


export default function FilesManagerPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Markdown Editor</h1>
      <MarkdownEditor />
    </div>
  );
};

//FilesManagerPage.getLayout = (page: React.ReactNode) => page;
FilesManagerPage.requireAuth = false;