/* eslint-disable react/prop-types */
const Button = (props) => {
	const { children, className, onClick } = props
	return (
		<button className={className} onClick={onClick}>
			{children}
		</button>
	)
}

export default Button
