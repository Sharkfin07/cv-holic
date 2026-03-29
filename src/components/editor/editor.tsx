import EditIcon from '../assets/icons/edit-icon.svg?react';

const fonts = [
    { name: "Sans Serif", class: "font-sans-serif" },
    { name: "Serif", class: "font-serif" },
    { name: "Monospace", class: "font-monospace" },
];

type EditorProps = {
    selectedFont: string,
    onFontChange: (font: string) => void,
};

function Editor({ selectedFont, onFontChange }: EditorProps) {
    return (
        <>
            <div className='flex gap-4 items-center justify-center'>
                <h1>
                    Editor
                </h1>
                <EditIcon className="" width={32} height={32} />
            </div>
            {fonts.map((font, index) => {
                return (
                    <button key={index} className={`h-7 w-full bg-red-500 ${selectedFont === font.class && "disabled"}`} onClick={() => onFontChange(font.class)}>
                        {font.name}
                    </button>
                );
            })}
        </>
    );
}

export default Editor;