import { FC } from 'react';
import { useTranslation } from 'react-i18next';
interface TableHeaderProps{
    headers:string[]
}
const TableHeader: FC<TableHeaderProps> = ({headers}) => {
    const { t } = useTranslation();
    return (
        <thead className="bg-primary-50">
            <tr>
                {headers.map((header,index)=>(
                    <th key={index} className="px-5 py-3 border-b-2 border-gray-400 bg-white text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        {t(header)}
                    </th>
                ))}
                <th className="px-5 py-3 border-b-2 border-gray-400 bg-white text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Actions
                </th>
            </tr>
        </thead>
    );
};

export default TableHeader;
