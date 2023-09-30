import { Me } from "../types/Me"

export const Header: React.FC<{data: Me}> = ({data}) => {
    return (
        <h2 className="text-4xl mb-5 text-white font-bold">{data.display_name}</h2>
    )
}