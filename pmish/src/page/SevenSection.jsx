import './SevenSection.css'

function SevenSection() {
	return (
		<div className='Seven_section science-group'>
			<h1 className='science-group_title'>Научные группы</h1>
			<div className='science-group_block'>
				<div className='content-block_left'>
					<div className='content-block_left-group left-group'>
						<h2 className='left-group_title'>
							Биоматериалы и тканевая инженерия
						</h2>
						<p className='left-group_txt'>
							Разработка новых материалов и методов для восстановления
							искусственных тканей и органов
						</p>
					</div>
					<div className='content-block_left-group left-group'>
						<h2 className='left-group_title'>Биомедицинская электроника</h2>
						<p className='left-group_txt'>
							Изучение и разработка электронных устройств, используемых в
							медицинских целях
						</p>
					</div>
				</div>
				<div className='content-block_right'>
					<div className='content-block_right-group right-group'>
						<h2 className='right-group_title'>Биомедицинская электроника</h2>
						<p className='right-group_txt'>
							Изучение и разработка электронных устройств, используемых в
							медицинских целях
						</p>
					</div>
					<div className='content-block_right-group right-group'>
						<h2 className='right-group_title'>
							Биоматериалы и тканевая инженерия
						</h2>
						<p className='right-group_txt'>
							Разработка новых материалов и методов для восстановления
							искусственных тканей и органов
						</p>
					</div>
				</div>
			</div>
			<div className='end_line-block'>
				<span className='end_line' />
			</div>
		</div>
	)
}

export default SevenSection
