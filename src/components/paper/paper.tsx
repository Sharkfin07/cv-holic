type PaperProps = {
    font?: string
};

function Paper({ font = "font-sans-serif" }: PaperProps) {
    return (
        <div className={`bg-white w-full h-full ${font}`}>
            What is up?
        </div>
    );
}

export default Paper;