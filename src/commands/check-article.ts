import { findFiles, processEachFile } from '@/utils/file.js';

export function checkArticle(pattern: string) {
  const filePathList = findFiles(pattern);
  
  if (filePathList.length === 0) {
    console.log('No files found');
    return;
  }
  
  let issueCount = 0;
  
  processEachFile(filePathList, (filePath, content) => {
    const lines = content.split('\n');
    if (filePath.endsWith('README.md')) {
      return;
    }
    if (lines.length < 3) {
      console.log(`${filePath}:1  error  Article content is less than 3 lines  article/length`);
      issueCount++;
      return;
    }
    if (lines.length > 500) {
      console.log(`${filePath}:1  error  Article content exceeds 500 lines  article/length`);
      issueCount++;
      return;
    }
  });
  
  if (issueCount === 0) {
    console.log('No article issues found');
  } else {
    console.log(`\n${issueCount} problem${issueCount > 1 ? 's' : ''}`);
  }
}

