import { Me } from "../types/me";

export const Header: React.FC<{data: Me}> = ({data}) => {
    return (
        <h3>{data.display_name}</h3>
    )
}