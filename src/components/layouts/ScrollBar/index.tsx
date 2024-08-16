import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import 'overlayscrollbars/overlayscrollbars.css';
import { cn } from "@/utils/style.config";
type ScrollbarProps = {
    options?: any;
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
};

const ScrollBar: React.FC<ScrollbarProps> = ({
    options,
    children,
    style,
    className,
    ...props
}) => {
    return (
        <OverlayScrollbarsComponent
            options={{
                className: cn("os-theme-thin-dark", className),
                scrollbars: {
                    autoHide: "scroll",
                },
                ...options,
            }}
            style={style}
            {...props}
        >
            {children}
        </OverlayScrollbarsComponent>
    );
};

export default ScrollBar;
