import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism"; 
import { CSSProperties } from "react";
import { TextField, Paper, Typography, Box } from "@mui/material";
import * as htmlDocx from 'html-docx-js/dist/html-docx';
import { saveAs } from 'file-saver';
import showdown from 'showdown';

const MarkdownEditor: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>("");

  const convertMarkdownToDocx = () => {
    // Convert the markdown to HTML
    const markdownToHtml = new showdown.Converter();
    const htmlContent = markdownToHtml.makeHtml(markdown);

    // Use html-docx-js to convert HTML to DOCX
    const docx = htmlDocx.asBlob(htmlContent);  // Convert HTML to DOCX

    // Save the file using FileSaver
    saveAs(docx, 'document.docx');
  };

  return (
    <Box border={"cyan"} className="flex flex-col lg:flex-row gap-4 p-4 border border-gray-200 rounded-lg">
      {/* Editor */}
      <Box className="lg:w-1/2" >
        <Typography variant="caption" gutterBottom>
          Write Your Markdown
        </Typography>
        <TextField
          multiline
          rows={12}
          variant="outlined"
          fullWidth
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Write your markdown here..."
          sx={{
            padding: 2,
            borderRadius: 1,
            boxShadow: 1,
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
          }}
        />
      </Box>

      {/* Preview */}
      <Box className="lg:w-1/2">
        <Typography variant="h6" gutterBottom>
          Preview
        </Typography>
        <Paper
          variant="outlined"
          sx={{
            padding: 2,
            borderRadius: 1,
            height: "400px",
            overflow: "auto",
            backgroundColor: "##222",
            boxShadow: 1,
          }}
        >
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }: any) {
                const match = /language-(\w+)/.exec(className || "");
                if (!inline && match) {
                  return (
                    <SyntaxHighlighter
                      style={darcula as CSSProperties}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  );
                }
                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {markdown}
          </ReactMarkdown>
        </Paper>
      </Box>

      {/* Button to convert markdown to DOCX */}
      <Box mt={2}>
        <button onClick={convertMarkdownToDocx}>Convert to DOCX</button>
      </Box>
    </Box>
  );
};

export default MarkdownEditor;
