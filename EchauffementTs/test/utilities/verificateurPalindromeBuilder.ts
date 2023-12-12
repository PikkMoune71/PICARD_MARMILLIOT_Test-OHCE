import {VerificateurPalindrome} from "../../src/VerificateurPalindrome";
import {LangueInterface} from "../../src/langue.interface";
import {LangueStub} from "./langueStub";
import {MomentDeLaJournee} from "../../src/momentDeLaJournee";

export class VerificateurPalindromeBuilder {
    private _langue: LangueInterface = new LangueStub();
    private _moment: MomentDeLaJournee = MomentDeLaJournee.Inconnu;

    public static Default() {
        return new VerificateurPalindromeBuilder().Build();
    }

    public Build(): VerificateurPalindrome {
        return new VerificateurPalindrome(this._langue, this._moment);
    }

    public AyantPourLangue(langue: LangueInterface): VerificateurPalindromeBuilder {
        this._langue = langue;
        return this;
    }

    public AyantPourMomentDeLaJournee(moment: MomentDeLaJournee) {
        this._moment = moment;
        return this;
    }
}