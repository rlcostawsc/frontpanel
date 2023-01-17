export function Login () {
	return(
		<div>
		<forms className="frm">

		<div class="frm-head">
		<h1>Iniciar Conta</h1>
		</div>

		<div class="field">
		<div class="frm-row">
			<input type="text" name="login" size="40" class=""/>
		</div>
		<input type="password" name="psw" size="40" class=""/>
		</div>
		<div>
			<span class="frm-ctl">
			<div >

				<input type="checkbox" id="lembrar"/>
				<label for="lembrar">Lembrar palavra passe</label>
			</div>
				<a href="#">Encontrar palavra passe</a>
			</span>
		</div>

		<button>Iniciar Conta</button>

		</forms>
		</div>
		);
}