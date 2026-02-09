import * as S from './Main.styled'

function Main() {
    return (
        <S.mainContainer>
            <S.mainTitle>Главная</S.mainTitle>
            <S.linksList>
                <li>
                    <S.linkItem to="/analytics">Аналитика</S.linkItem>
                </li>
                <li>
                    <S.linkItem to="/sign-in">Войти в систему</S.linkItem>
                </li>
                <li>
                    <S.linkItem to="/sign-up">Зарегистрироваться</S.linkItem>
                </li>
            </S.linksList>
        </S.mainContainer>
    )
}

export default Main
