import EditIcon from '../../assets/icons/edit-icon.svg?react';
import GlobalButton from '../ui/GlobalButton';

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
            <EditorSection>
                <div className='flex gap-2'>
                    {fonts.map((font, index) => {
                        return (
                            <GlobalButton onClick={() => onFontChange(font.class)} key={index} className={selectedFont === font.class ? "disabled" : ""}>{font.name}</GlobalButton>
                        );
                    })}
                </div>
            </EditorSection>
        </>
    );
}

function EditorSection({ children, ...props }: React.ButtonHTMLAttributes<HTMLAreaElement>) {
    return (
        <section className='p-5 bg-gray-700 rounded-2xl' {...props}>
            {children}
        </section>
    );
}

export default Editor;