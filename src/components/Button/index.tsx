import { ButtonContainer, ButtonVariant } from "./Button.styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
}

export function Button({ variant="primary", ...props }: ButtonProps) {
	return (
		<ButtonContainer variant={variant} {...props}>
			Click me
		</ButtonContainer>
	);
}
