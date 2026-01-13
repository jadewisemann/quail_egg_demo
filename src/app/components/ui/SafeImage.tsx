import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    fallbackClassName?: string;
}

export function SafeImage({ src, alt, className, fallbackClassName, ...props }: SafeImageProps) {
    const [error, setError] = useState(false);

    if (!src || error) {
        return (
            <div className={`flex items-center justify-center bg-zinc-100 text-zinc-400 ${className} ${fallbackClassName}`}>
                <ImageOff className="w-1/3 h-1/3 opacity-20" />
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            onError={() => setError(true)}
            {...props}
        />
    );
}
