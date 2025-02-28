<?php

namespace App\Console\Commands\Utils;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class MakeRepositoryCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:repository';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create repository with given model';

    /**
     * Execute the console command.
     */
    public function handle(): void
    {
        $model = $this->ask('Model');

        $stubPath = base_path('stubs/repository.stub');
        $repositoryPath = app_path("Repository/{$model}Repository.php");

        if (!File::exists($stubPath)) {
            $this->error('Repository template not found.');
            return;
        }

        if (File::exists($repositoryPath)) {
            $this->error("Repository {$model}Repository already exists!");
            return;
        }

        $stub = File::get($stubPath);
        $content = str_replace('{{ model }}', $model, $stub);

        File::put($repositoryPath, $content);

        $this->info("Repository {$model}Repository created successfully!");
    }
}
