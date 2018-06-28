---
id: 0204-run-sql-execution-plan
title: Run SQL Execution Plan
sidebar_label: Run SQL Execution Plan
---


## Run SQL Execution Plan and Check Index
> Supported models :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

This section explains how to run SQL Execution Plan.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the Toolbar or press Ctrl+N.
3. Write SQL.
4. On the main menu bar, go to **Query**>**Execution Plan of Current SQL**. Or, simply click [Execution Plan of Current SQL] on the Toolbar or press F7.
5. On Execution Plan tab, check to see tree view result.

![Run SQL Execution Plan and Check Index](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/execution-plan-en.png)

6. On the Flow Chart tab, check if the Flow Chart has correctly been created .

![On the Flow Chart tab, check if the Flow Chart has correctly been created .](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/execution-plan-aflow-chart-en.png)

7. Check if the Index ran successfully.

![Execution Plan text](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/execution-plan-text-en.png)


## Run Using Execution Plan of Block SQL
> Supported models :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,db2,tibero>)

This section explains how to run using execution plan of block SQL.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the Toolbar or press Ctrl+N.
3. Write SQL.
4. Click [Execution Plan of Block SQL] or press Alt+F7.
5. On the execution plan tab, check the tree view.

![Run Using Execution Plan of Block SQL](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/execution-plan-block-en.png)

## List of SQL Editor Shortcut Keys

Shortcut keys in SQL Editor can be customized.

### Execution Toolbar

| Button | Instruction | Shortcut Keys | Action |
| --- | --- | --- | --- |
| ![Run SQL](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-runSQL.png)                                                          | Run SQL | F5 | Run SQL. |
| ![Run current SQL](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-runCurrentSQL.png)                                           | Run Current SQL | Ctrl+Enter. Ctrl+F5 | Run the current SQL that is separated with other SQLs with a separator. |
| ![Run the SubQuery block.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-subQueryBlock.png)                                   | Run SubQuery block | Alt+F5 | Run the SubQuery block. |
| ![Stop](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-stop.png)                                                               | Stop | ESC | Stop running SQL. |
| ![Run current SQL and modify the data on the grid.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-runAndModifyCurrentSQL.png) | Run and Modify Current SQL | F6 | Run current SQL and modify the data on the grid. |
| ![Run Execution plan](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-blockSQLExecutionPlan.png)                                | Run Current SQL Execution Plan | F7 | Run current SQL Execution Plan. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/EA5C881671A89564872C8E5939221B79.jpg)                                                                   | Block SQL Execution Plan  | Alt+F7 | Run subquery block SQL Execution Plan. |
| ![SQL History](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-SQLHistory.png)                                                  | SQL History | F8 | Run SQL History. |
| ![SQL History](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-showGrid.png)                                                    | Show Grid | F11 | Toggle/Collapse grid. |
| ![SQL Alignment](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-SQLAlignment.png)                                              | SQL Alignment | F9 | Align SQL in SQL Editor. |
| ![SQL Alignment Options](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-SQLAlignmentOptions.png)                               | SQL Alignment Options | | Set SQL Alignment options. |
| ![Move tab to right](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-moveTabToRight.png)                                        | Move Tabs to Right | | Move the tab located at the bottom to the right. |

### Tab Toolbar

| Button | Instruction | Shortcut Keys | Action |
| --- | --- | --- | --- |
| ![Add Editor](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-addEditor.png) | Add Editor | Ctrl+Alt+N | Add Editor. |
| ![Remove editor](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-removeEditor.png) | Remove Editor | Ctrl+Alt+D | Remove Editor. |
| ![Previouse Editor](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-previousEditor.png) | Previous Editor | Ctrl+Alt+Left | Move to previous Editor. |
| ![Next editor](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-nextEditor.png) | Next Editor | Ctrl+Alt+Right | Move to next Editor. |

### File Toolbar

| Button | Instruction | Shortcut Keys | Action |
| --- | --- | --- | --- |
| ![Open file](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-openFile.png) | Open File | Ctrl+O | Open file. |
| ![Save as](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-saveAs.png) | Save as | | Save the file with a different name. |
| ![Save](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-save.png) | Save | Ctrl+S | Save file. |
| ![Print preview](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-printPreview.png) | Print Preview | Ctrl+P | View the file to see how it will be printed. |

### Editor Toolbar

| Button | Instruction | Shortcut Keys | Action |
| --- | --- | --- | --- |
| ![Undo](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-undo.png)                                         | Undo | Ctrl+Z | Undo what has been done. |
| ![Redo](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-redo.png)                                         | Redo | Shift+Ctrl+Z | Redo what has been done. |
| ![Cut](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-cut.png)                                           | Cut | Ctrl+X | Cut to Clipboard. |
| ![icon sql history copy to clipboard](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-copy-to-clipboard.png) | Copy | Ctrl+C | Copy to Clipboard. |
| ![Paste](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-paste.png)                                       | Paste | Ctrl+V | Paste to Clipboard |
| ![Paste from the code](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-pasteFromTheCode.png)              | Paste from the code | | Paste from the following codes: Java, C, C#, ASP ,PHP, PB, VB, Delphi. |
| ![Select all](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-selectAll.png)                              | Select all | Ctrl+A | Select all contents in the Editor. |
| ![Clear ALL](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-clearAll.png)                                | Clear all |  | Clear all contents from Editor.|
| ![Delete](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-delete.png)                                     | Delete | Del | Delete characters in Editor. |
| ![Find](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-find.png)                                         | Find | Ctrl+F | Find within the Editor. |
| ![Find next](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-findNext.png)                                | Find Next | F3 | 찾을 내용 다음 찾기를 실행합니다. |
| ![Find all](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-findAll.png)                                  | Find All |  | 찾을 내용 모두 찾기를 실행합니다.|
| ![Find first](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-findFirst.png)                              | Find First | | 찾을 내용을 처음부터 찾기를 실행합니다.|
| ![Find last](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-findLast.png)                                | Find Last | | 찾을 내용의 마지막 찾기를 실행합니다. |
| ![Replace](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-replace.png)                                   | Replace | Ctrl+R | Find and replace the contents. |
| ![Comment Block](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-commentBlock.png)                        | Comment Block | Ctrl+- | Comment the blocked lines. |
| ![Uncomment block](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-uncommentBlock.png)                    | Uncomment Block | Shift+Ctrl+- | Uncomment the blocked lines. |
| ![Indent](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-indent.png)                                     | Indent | | Indent where the cursor is placed. |
| ![Outdent](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-outdent.png)                                   | Decrease Indent | Shift+Tab | Decrease indent where the cursor is placed. |
| ![Uppercase](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-uppercase.png)                               | Uppercase | Ctrl+U | Turn characters into uppercase on which the cursor is placed. |
| ![Lowercase](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-lowercase.png)                               | Lowercase | Ctrl+L | Turn characters into lowercase on which the cursor is placed. |
| ![Change Case](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-changeCase.png)                            | Change Case | | Change case on which the cursor is placed. |
| ![Capitalize](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-capitalize.png)                             | Capitalize | Ctrl+I | Capitalize the first letter of the selected sentence. |
| ![Goto line](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-gotoLine.png)                                | Goto Line | Ctrl+G | Place the cursor on the line to move. |
| ![Word wrap](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-wordWrap.png)                                | Word Wrap | | Toggle/Collapse word wrap. |
| ![Show blank, tab, Return](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-showBlankTabReturn.png)        | Show Blanks/Tab characters/Carriage Returns | | Show Blanks/Tab characters/Carriage Returns. |
| ![Toggle folding.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-toggleFolding.png)                     | Toggle Folding | | Toggle folding. |
| ![SQL Convert](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-SQLConvert.png)                            | SQL Convert | | Convert SQL into the following codes: Delphi, VB, C#, ASP, PHP,  JSP, Java, C. |


### Format Toolbar

| Button | Instruction | Shortcut Keys | Action |
| --- | --- | --- | --- |
| ![Set Background Color](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-setBackgroundColor.png)            | Set Background Color | | Set background color for the selected characters. |
| ![Use Substitution variables](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-useSubstitutionVariable.png) | Use Substitution Variable | | Toggle substitution variable. |
| ![Use bind variables](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-useBindVariable.png)                 | Use Bind Variable | | Toggle bind variable. |