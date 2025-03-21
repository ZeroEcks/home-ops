{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };
  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs {
          inherit system;
        };
        nativeBuildInputs = with pkgs; [
          kubernetes-helm
          velero
          fluxcd
          sops
          just
        ];
      in
      with pkgs;
      {
        devShells.default = mkShell {
          inherit nativeBuildInputs;
        };
      }
    );
}
