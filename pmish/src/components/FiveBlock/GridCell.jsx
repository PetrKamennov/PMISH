import React from 'react'

function GridCell(props) {
	return (
		<div className='FiveBlock__main-grid__cell'>
			<b>{props.cell.educationTitle}</b>
			<p>{props.cell.educationText}</p>
		</div>
	)
}

export default GridCell
