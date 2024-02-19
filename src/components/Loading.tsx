export const Loading = () => {
    const numRows = Array.from(Array(10).keys());
    console.log(numRows);

    return (
        <>
            <div className="mt-16 text-3xl p-2 italic font-bold flex justify-between bg-rose-200 border-black border-2 border-b-0">
                {/* <FormattedMessage id="topArtists" /> */}
                <div className="w-40 h-8 bg-red-400 animate-pulse"></div>
                <div className="flex flex-row w-20 justify-between">
                    <div className="w-8 h-8 bg-red-400 animate-pulse"></div>
                    <div className="w-8 h-8 bg-red-400 animate-pulse"></div>
                </div>
            </div>
            <div className="pt-5 bg-rose-200 border-black border-2 pr-4">
                {
                    numRows.map((i) => {
                        return (
                            <div className="grid grid-cols-2 px-4 mb-3 w-full" key={i}>
                                <div className="relative mb-3 animate-pulse">
                                    <div className="w-14 h-14 bg-red-400 rounded-full"></div>
                                </div>
                                <div className="flex flex-col justify-center w-full ml-10 mb-5 animate-pulse">
                                    <div className="w-11/12 h-8 bg-red-400"></div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};
