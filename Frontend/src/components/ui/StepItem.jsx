function StepItem({ stepNumber, stepDescription }) {
    return (
        <li className="flex flex-col items-center justify-start gap-4 max-w-[200px] text-center">
            <h3 className="text-2xl blue">{stepNumber}</h3>
            <p className="dark">{stepDescription}</p>
        </li>
    );
}

export default StepItem;
