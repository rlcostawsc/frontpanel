export function Login () {
	return(
		<div>
		<form className="frm">

		<div className="frm-head">
		<h1>Iniciar Conta</h1>
		</div>

		<div className="field">
			<div className="frm-row">
				<input type="text" name="login" size="40" className=""/>
			</div>
			<input type="password" name="psw" size="40" className=""/>
		</div>

		<div className="frm-ctl">
			<div style={{display : 'flex'}}>
				<input type="checkbox" id="lembrar"/>
				<label htmlFor="lembrar">Lembrar palavra passe</label>
			</div>
			<a href="#">Encontrar palavra passe</a>
		</div>

		<button>Iniciar Conta</button>

		</form>
		</div>
		);
}