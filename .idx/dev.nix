{ pkgs, ... }:
{
  # Which nixpkgs channel to use.
  channel = "stable-23.11"; # or "unstable"

  # A list of packages to have available in your environment.
  packages = [
    pkgs.nodejs_20
    pkgs.bun
    pkgs.tailwindcss
   ];

  # A list of extensions to have available in your editor.
  idx.extensions = [
    "vscodevim.vim"
    "bradlc.vscode-tailwindcss"
   ];

  # Specifies a list of processes to run on workspace startup.
  idx.workspace = {
    # Runs when a workspace is first created.
    onCreate = {
      npm-install = "npm install --prefix Portfolio";
      build-css = "npm run build:css --prefix Portfolio";
    };
    # Runs every time the workspace is (re)started.
    onStart = {
      # Watch for CSS changes in the background
      watch-css = "npm run watch:css --prefix Portfolio &";
    };
  };

  # Configure a web preview for your application.
  idx.previews = {
    enable = true;
    previews = {
      web = {
        # Run the application directly with node to ensure $PORT is received.
        command = ["node" "Portfolio/app.js" "--port" "$PORT"];
        manager = "web";
      };
    };
  };

  # Sets environment variables in your workspace.
  env = { };
}
