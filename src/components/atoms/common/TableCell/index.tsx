import { cn } from "@/utils/style.config";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const tableCellStyles = cva([
    "px-3 py-2 border-b border-gray-200 bg-white text-sm"
], {
    variants: {
        variant: {
            default: "",
            header: "bg-gray-100 font-bold text-gray-700",
            footer: "bg-gray-200 font-semibold"
        },
        align: {
            left: "text-left",
            center: "text-center",
            right: "text-right"
        },
        colorSchema: {
            default: "",
            primary: "text-primary-600"
        }
    },
    compoundVariants: [
        {
            variant: "header",
            colorSchema: "primary",
            className: "text-primary-600 bg-primary-100"
        },
        {
            variant: "footer",
            colorSchema: "primary",
            className: "text-primary-600 bg-primary-200"
        }
    ],
    defaultVariants: {
        variant: "default",
        align: "left",
        colorSchema: "default"
    }
});

type TableCellProps = ComponentProps<"td"> & VariantProps<typeof tableCellStyles>;

// Create the TableCell component using forwardRef
const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
    ({ variant, align, colorSchema, className, ...props }, ref) => {
        return (
            <td
                ref={ref}
                className={cn(tableCellStyles({ variant, align, colorSchema, className }))}
                {...props}
            />
        );
    }
);

TableCell.displayName = "TableCell";
export default TableCell;
