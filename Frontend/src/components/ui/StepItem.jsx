function StepItem({ stepNumber, stepDescription }) {
    return (
        <li className="flex flex-col items-center justify-start gap-4 max-w-[200px] text-center">
            <h3 className="text-xl md:text-2xl lg:text-2xl blue">{stepNumber}</h3>
            <p className="text-sm md:text-base dark">{stepDescription}</p>
        </li>
    );
}

export default StepItem;
