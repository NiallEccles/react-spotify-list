export const Error: React.FC<{ error: string }> = ({ error }) => {

    return (
        <section className="mb-10">
            <ol className="py-5 bg-rose-200 border-black border-2">
                {error}
            </ol>
        </section>
    )
}