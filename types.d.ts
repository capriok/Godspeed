interface NavbarProps {
	className?: string
	style?: string
	title?: string
	titleFont?: string
	to?: string
	src?: string
	bg?: string
	color?: string
	logo?: string
	height?: string
	shadow?: boolean
	inv?: boolean
}

interface NavlinkProps {
	className?: string
	style?: string
	onClick?: () => void
	to?: string
	color?: string
	hover?: string
}

interface ButtonProps {
	className?: string
	type?: "button" | "submit" | "reset"
	name?: string
	onClick?: () => void
	form?: string
	text?: string
	to?: string
	size?: string
	bg?: string
	color?: string
	clear?: boolean
	disabled?: boolean
	shadow?: boolean
}

interface InputProps {
	className?: string
	style?: string
	type?: string
	name?: string
	min?: string
	max?: string
	step?: string
	onKeyPress?: () => void
	onKeyDown?: () => void
	onChange?: () => void
	value?: string
	defaultValue?: string
	ref?: () => void
	placeholder?: string
	color?: string
	autoFocus?: boolean
	checked?: boolean
	error?: boolean
	shadow?: boolean
	underlined?: boolean
	disabled?: boolean
}

interface CardProps {
	className?: string
	onClick?: () => void
	bg?: string
	color?: string
	borderBg?: string
	padding?: string
	radius?: string
}

interface ModalProps {
	className?: string
	bg?: string
	color?: string
	borderBg?: string
	padding?: string
	radius?: string
	error?: boolean
}

interface DrawerProps {
	className?: string
	side?: string
	bg?: string
	color?: string
	padding?: string
	borderBg?: string
}

declare module "*.png"
declare module "*.jpg"
