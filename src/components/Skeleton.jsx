function Skeleton({ times, className }) {
    const boxes = Array(times)
        .fill(0)
        .map((_, i) => {
            return (
                <div
                    key={i}
                    className={`relative overflow-hidden bg-[#4e5152] mb-2.5 ${className}`}
                >
                    <div
                        className={`animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r 
                          from-[#4e5152] via-white to-[#4e5152]`}
                    />
                </div>
            );
        });

    return boxes;
}

export default Skeleton;
