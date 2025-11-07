function StepItem({ stepNumber, stepDescription }) {
    return (
        <li>
            <h3>{stepNumber}</h3>
            <p>{stepDescription}</p>
        </li>
    );
}

export default StepItem;
