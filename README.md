# Shadcn Editor

## Usage

1. Init shadcn-ui in your project and add the following components:
- `Button`
- `Checkbox`
- `Command`
- `Dialog`
- `Input`
- `Label`
- `Popover`
- `Scroll Area`
- `Select`
- `Separator`
- `Tabs`
- `Textarea`
- `Tooltip`
- `Toggle`
- `Toggle Group`

2. Clone the repository

```bash
git clone https://github.com/htmujahid/shadcn-editor.git
```

3. Copy the `src/components/editor` folder into your project.

```bash
cp -r shadcn-editor/src/components/editor your-project/src/components/
```

4. Import the `Editor` component into your project where you want to use it.

```tsx
import { Editor } from '@/components/editor'
```

5. Use the `Editor` component in your project.

```tsx
<Editor 
  editorSerializedState={editorSerializedState} 
  onSerializedChange={(value) => setEditorSerializedState(value)} 
/>
```
