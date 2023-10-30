import star from '../../images/icon/star.webp';
import imgSubHeaderSmall from '../../images/Others/others_5.webp';
import imgSubHeaderMedium from '../../images/Others/others_6.webp';
import imgSubHeaderBig from '../../images/Others/others_7.webp';

import {
	SubHeaderWrapper,
	OrnamentWrapper,
	SubHeaderText,
	SubHeaderTitle,
	SubHeaderParagraph,
	SubHeaderImage,
	ImgSmall,
	ImgMedium,
	ImgBig,
	SloganWrapper,
	StarIcon,
	Slogan,
} from './styleSubHeader';

const SubHeader = () => {
	return (
		<SubHeaderWrapper>
			<OrnamentWrapper />
			<SubHeaderText>
				<SubHeaderTitle>Вільна нитка</SubHeaderTitle>
				<SubHeaderParagraph>
					Ми виробляємо етнічний одяг, сорочки, за індивідуальним замовленням, який ми відшиваємо і
					вишиваємо за власним дизайном і кроєм. Маємо власну колекцію сорочок з кожного регіону
					України.
				</SubHeaderParagraph>
			</SubHeaderText>
			<SubHeaderImage>
				<ImgBig src={imgSubHeaderBig} alt="ornament" />
				<ImgMedium src={imgSubHeaderMedium} alt="ornament" />
				<ImgSmall src={imgSubHeaderSmall} alt="ornament" />
				<SloganWrapper>
					<StarIcon src={star} alt="star icon" />
					<Slogan>віднови вишиванку своєї бабусі.</Slogan>
				</SloganWrapper>
				<SloganWrapper>
					<StarIcon src={star} alt="star icon" />
					<Slogan>Створюємо речі сили сильними жінками.</Slogan>
				</SloganWrapper>
			</SubHeaderImage>
			<Slogan>Час бути вільною.</Slogan>
		</SubHeaderWrapper>
	);
};

export default SubHeader;
