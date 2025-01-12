// Adjust the path as necessary
import * as React from "react";
import MarkdownEditor from "../../components/MarkdownEditor";

export default function MarkdownPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Markdown Editor</h1>
      <MarkdownEditor />
    </div>
  );
}

//MarkdownPage.getLayout = (page: React.ReactNode) => page;
MarkdownPage.requireAuth = false;
