import Carousel from '../components/Caraousel'

function HomePage() {
    return (
        <div>

            <Carousel />
            <p> Nuestro Objetivo: Cambiar tu futuro</p>
            <p className='text-3xl text-center'> El centro de formacion con mas de 20 años de experiencia.</p>
            <p> Profesores Altamente Cualificados</p>
            <p> Escuela Especializada: Mas de 20 años de experiencia en el sector de la belleza y estetica para que hagas realidad tu carrera profesional</p>
            <p> Ubicacion: Nuestras Clases Presenciales se realizan en Madrid (Paseo Santa Maria De La Cabeza, 10)</p>
            <p> Atencion y Seguimiento</p>

            <div className="d-stats d-stats-vertical lg:d-stats-horizontal shadow">
                <div className="d-stat">
                    <div className="d-stat-title">Downloads</div>
                    <div className="d-stat-value">31K</div>
                    <div className="d-stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="d-stat">
                    <div className="d-stat-title">New Users</div>
                    <div className="d-stat-value">4,200</div>
                    <div className="d-stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="d-stat">
                    <div className="d-stat-title">New Registers</div>
                    <div className="d-stat-value">1,200</div>
                    <div className="d-stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>
        </div>
    )
}

export default HomePage