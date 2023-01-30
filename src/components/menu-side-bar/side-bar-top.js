
import {active} from './panelCtl.js'

export function SideBarTop (argument) {
	return(
		<div id="side-bar-top">
		<div id="brand-side-bar-top"/>
		<div id="btn_perfil" style={{border: '1px solid red'}}/>
		<div id="menu-list" className="menu-list">
					<ul>
						<div id="btn-area" className="btn-area-min" onClick={active}>
						<li className="btn-conta-active" data-btn="icon"><p id="btn-conta" data-label
							="label-menu" className="btn-menu-active">Conta</p></li>
						</div>
						<div id="btn-area" className="btn-area-min">
						<li className="btn-business" data-btn="icon"><p id="btn-business" data-label
							="label-menu">Negócios</p></li>
						</div>
						<div id="btn-area" className="btn-area-min">
						<li className="btn-add-costumer" data-btn="icon"><p id="btn-add-costumer" data-label
							="label-menu">Adicionar Clientes</p></li>
						</div>
						<div id="btn-area" className="btn-area-min">
						<li className="btn-add-device" data-btn="icon"><p id="btn-add-device" data-label
							="label-menu">Adicionar dispositivos</p></li>
						</div>
						<div id="btn-area" className="btn-area-min">
						<li className="btn-add-card" data-btn="icon"><p id="btn-add-card" data-label
							="label-menu">Cartão de crédito</p></li>
						</div>
						<div id="btn-area" className="btn-area-min">
						<li className="btn-function" data-btn="icon"><p id="btn-functions" data-label
							="label-menu">Funções</p></li>
						</div>
					</ul>
					
				</div>
		</div>
		);
}