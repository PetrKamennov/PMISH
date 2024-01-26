import React from 'react'

function GridCell(props) {
	return (
		<div className='FiveBlock__main-grid__cell'>
			<b>{props.cell.EducationTitle}</b>
			<p>{props.cell.EducationText}</p>
		</div>
	)
}

export default GridCell
