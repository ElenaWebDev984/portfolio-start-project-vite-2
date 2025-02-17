import iconsSprite from '../../assets/images/icon-sprite.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    overflow?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg height={props.height || '50'} width={props.width || '50'} viewBox={props.viewBox || '0 0 50 50'} overflow={props.overflow || 'visible'}
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};

