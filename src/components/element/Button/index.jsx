/* eslint-disable react/prop-types */
const Button = (props) => {
	const { children, className, onClick, value } = props
	return (
		<button className={className} onClick={onClick}>
			{children}
			{value}
		</button>
	)
}

export default Button
